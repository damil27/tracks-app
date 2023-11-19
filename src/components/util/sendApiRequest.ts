type Method = "GET" | "POST" | "PUT" | "DELETE";

function ReturnSendApiRequest(method: Method, data: unknown): RequestInit {
  if (method === "GET") {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export async function SendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const response = await fetch(url, ReturnSendApiRequest(method, data));
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json() as Promise<T>;
}

// type Method = "GET" | "POST" | "PUT" | "DELETE";

// function ReturnSendApiRequest(method: Method, data: unknown): RequestInit {
//   if (method === "GET") {
//     return {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//   }

//   return {
//     method: method,
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
// }

// export async function SendApiRequest(
//   url: string,
//   method: Method,
//   data: unknown = {}
// ): Promise<void> {
//   const response = await fetch(url, ReturnSendApiRequest(method, data));
//   if (!response.ok) {
//     const message = `An error has occurred: ${response.status}`;
//     throw new Error(message);
//   }

//   // If the response body is not needed, you can omit the following line.
//   await response.json();
// }
