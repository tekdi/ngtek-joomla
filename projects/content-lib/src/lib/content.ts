export class Content {
  formData;
  constructor() {
    this.formData = new FormData();
  }

  setId(id: string) {
    this.formData.append('id', id);
  }

  setAlias(alias) {
    this.formData.append('alias', alias);
  }

  setTitle(title) {
    this.formData.append('title', title);
  }

  setIntroText(introText) {
    this.formData.append('introtext', introText);
  }

  setCatId(catId: string) {
    this.formData.append('catid', catId);
  }

  setSate(sate: string = '1') {
    this.formData.append('state', sate);
  }

  setFullText(fullText) {
    this.formData.append('fulltext', fullText);
  }
}
