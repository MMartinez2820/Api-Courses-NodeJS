const Videos = require('../models/videos.models');

// create videos
class videoServices {

  static async createVideo(video) {
    try {
      const result = await Videos.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  };
//delete videos
  static async deleteVideoId(id) {
    try {
      const result = await Videos.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }

};
module.exports = videoServices;