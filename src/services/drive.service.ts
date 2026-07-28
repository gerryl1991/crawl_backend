import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "service-account.json",
  scopes: [
    "https://www.googleapis.com/auth/drive.file",
  ],
});

const drive = google.drive({
  version: "v3",
  auth,
});

export async function uploadToDrive(
  stream: NodeJS.ReadableStream,
  fileName: string
) {
  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: ['1Fx7pSDCeozwqMYYPJZAt7PqEv5f2cziv'],
    },
    media: {
      mimeType: "application/pdf",
      body: stream,
    },
    fields: "id, webViewLink",
  });

  return response.data;
}
