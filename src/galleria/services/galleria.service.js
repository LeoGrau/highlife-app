const filePath = "../../../server/galleria.json";

class GalleriaService {
  getAllPictures() {
    return fetch(filePath)
      .then((res) => res.json())
      .then((jsonTrans) => jsonTrans.data);
  }
}

export default new GalleriaService();
