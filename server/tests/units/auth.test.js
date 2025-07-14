const { protect } = require('../../../src/utils/auth');
const jwt = require('jsonwebtoken');
const User = require('../../../src/models/User');

jest.mock('jsonwebtoken');
jest.mock('../../../src/models/User');

describe('protect middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it('should return 401 if no token is provided', async () => {
    await protect(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
  });

  it('should return 401 if token is invalid', async () => {
    req.headers.authorization = 'Bearer invalidtoken';
    jwt.verify.mockImplementation(() => { throw new Error('Invalid token'); });

    await protect(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized, token failed' });
  });

  it('should return 401 if user not found', async () => {
    req.headers.authorization = 'Bearer validtoken';
    jwt.verify.mockReturnValue({ id: '123' });
    User.findById.mockResolvedValue(null);

    await protect(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
  });

  it('should call next and attach user if token and user are valid', async () => {
    req.headers.authorization = 'Bearer validtoken';
    const mockUser = { _id: '123', name: 'Test User' };

    jwt.verify.mockReturnValue({ id: '123' });
    User.findById.mockResolvedValue(mockUser);

    await protect(req, res, next);
    expect(req.user).toEqual(mockUser);
    expect(next).toHaveBeenCalled();
  });
});
