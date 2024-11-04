"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    console.error("Session cookie not found or is empty");
    throw new Error("Session not found");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

// export async function createSessionClient() {
//   const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

//   const session = cookies().get("appwrite-session");

//   if (!session || !session.value) {
//     throw new Error("No session");
//   }

//   client.setSession(session.value);

//   return {
//     get account() {
//       return new Account(client);
//     },
//   };
// }

// export async function createAdminClient() {
//   const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
//     .setKey(process.env.NEXT_APPWRITE_KEY!);

//   return {
//     get account() {
//       return new Account(client);
//     },
//     get database() {
//       return new Databases(client);
//     },
//     get user() {
//       return new Users(client);
//     },
//   };
// }

export async function createAdminClient() {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
      .setKey(process.env.NEXT_APPWRITE_KEY!);

    return {
      get account() {
        return new Account(client);
      },
      get database() {
        return new Databases(client);
      },
      get user() {
        return new Users(client);
      },
    };
  } catch (error) {
    console.error("Error setting up Appwrite admin client:", error);
    throw new Error("Admin client setup failed");
  }
}
