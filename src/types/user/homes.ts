export namespace Homes {
  export enum UploadMenuStatus {
    ACTIVE = 'ACTIVE',
    TO_UPLOAD = 'TO_UPLOAD',
    BLOCKED = 'BLOCKED',
    PENDING_ANALYSIS = 'PENDING_ANALYSIS'
  }

  export type UploadMenu = {
    index: number
    title: string
    url?: string
    status: UploadMenuStatus
  }
}
