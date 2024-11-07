import { findServer } from './index'

const sample = [
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
];

jest.mock('axios', () => {
  return {
    ...jest.requireActual('axios'),
    get: jest.fn()
      .mockResolvedValueOnce({
        status: 200
      })
      .mockResolvedValueOnce({
        status: 200
      })
      .mockResolvedValueOnce({
        status: 200
      })
      .mockResolvedValueOnce({
        status: 200
      })
      // case 2
      .mockResolvedValueOnce({
        status: 500
      })
      .mockResolvedValueOnce({
        status: 500
      })
      .mockResolvedValueOnce({
        status: 500
      })
      .mockResolvedValueOnce({
        status: 500
      })
      // case 3
      .mockResolvedValueOnce({
        status: 500
      })
      .mockResolvedValueOnce({
        status: 200
      })
      .mockResolvedValueOnce({
        status: 500
      })
      .mockResolvedValueOnce({
        status: 200
      })
  }
})


describe('findServer test', () => {
  it('should resolve with the online server of lowest priority', async () => {
    const result = await findServer(sample);
    expect(result).toEqual(sample[0]);
  });

  it('should throw error when all server are offline', async () => {
    try {
      const result = await findServer(sample);
    } catch (error) {
      expect((error as any).message).toEqual('All servers all offline')
    }
  });

  it('should resolve with the online server of lowest priority', async () => {
    const result = await findServer(sample);
    expect(result).toEqual(sample[3]);
  });
})