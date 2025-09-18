export type CertificationsType = {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  tags?: string[];
  memo?: string;
};

export const certifications: CertificationsType[] = [
  {
    id: "ipass",
    title: "ITパスポート試験",
    issuer: "IPA",
    issuedDate: "2024-05-16",
    tags: ["IPA", "ITパスポート"],
  },
  {
    id: "FE",
    title: "基本情報技術者試験",
    issuer: "IPA",
    issuedDate: "2025-02-17",
    tags: ["IPA", "FE"],
  },
  {
    id: "TOEIC",
    title: "TOEIC L&R Score 815",
    issuer: "IIBC",
    issuedDate: "2025-01-07",
    tags: ["IIBC", "TOEIC"],
  },
  {
    id: "car",
    title: "普通自動車免許(AT限定,眼鏡条件付き)",
    issuer: "警察",
    issuedDate: "2023-09-11",
  },
];
