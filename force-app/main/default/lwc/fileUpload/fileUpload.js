/**
 * @desscription Simple LwC File Upload LwC
 * @author Mike Gill
 * @date 11th December 2019
 */

import { LightningElement, api } from "lwc";
export default class MyComponentName extends LightningElement {
  @api
  recordId;

  // @Note Implemement accepted formats here (not enabled)
  get acceptedFormats() {
    return [".pdf", ".png"];
  }

  handleUploadFinished(event) {
    // Get the list of uploaded files
    const uploadedFiles = event.detail.files;
    alert("No. of files uploaded : " + uploadedFiles.length);
  }
}
