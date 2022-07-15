const filePath = "../../../server/games.json";

class GalleriaService {
  getAllGamePictures() {
    return fetch(filePath)
      .then((res) => res.json())
      .then((jsonTrans) => jsonTrans.data);
  }
}

export default new GalleriaService();
