import axios from 'axios'

type WebServerItem = {
  url: string
  priority: number
}

const REQUEST_TIMEOUT = 5000;

async function checkServerOnline(server: WebServerItem, timeout = REQUEST_TIMEOUT) {
  try {
    const result = await axios.get(server.url, {
      timeout: REQUEST_TIMEOUT
    });
    return result.status >= 200 && result.status < 300;
  } catch (error) {
    return false
  }
}

/**
 * findServer
 */
export async function findServer(servers: Array<WebServerItem>) {
  const promises = await Promise.allSettled(
    servers.map(async (server) => {
      const isOnline = await checkServerOnline(server)
      if (!isOnline) {
        throw new Error('Server is offline')
      }
      return server
    })
  )


  let onlineServer: (WebServerItem | null) = null;
  promises.forEach(promise => {
    if (promise.status === 'fulfilled'
      && (!onlineServer || promise.value.priority < onlineServer.priority)
    ) {
      onlineServer = promise.value;
    }
  })

  if (!onlineServer) {
    throw new Error('All servers all offline')

  }
  return onlineServer;

}