// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretFoldersSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  version: z.number().default(1).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  envId: z.string().uuid(),
  parentId: z.string().uuid().nullable().optional()
});

export type TSecretFolders = z.infer<typeof SecretFoldersSchema>;
export type TSecretFoldersInsert = Omit<TSecretFolders, TImmutableDBKeys>;
export type TSecretFoldersUpdate = Partial<Omit<TSecretFolders, TImmutableDBKeys>>;