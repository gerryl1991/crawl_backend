import { downloadPdf } from "./pdf.service";
import { uploadToDrive } from "./drive.service";

interface UploadRecord {
  label: string;
  link: string;
}

export async function uploadDocuments(records: UploadRecord[]) {
  const uploaded = [];

  for (const record of records) {
    const pdf = await downloadPdf(record.link);

    const file = await uploadToDrive(
      pdf,
      `${record.label}.pdf`
    );

    uploaded.push({
      label: record.label,
      driveId: file.id,
      driveUrl: file.webViewLink,
    });
  }

  return uploaded;
}
