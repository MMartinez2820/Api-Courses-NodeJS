const videoServices = require('../services/videos.services');
//new video
const newVideo = async (req, res) => {
  try {
    const video = req.body;
    const result = await videoServices.createVideo(video);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
// delete vedios for id
const deleteVideo = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await videoServices.deleteVideoId(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  newVideo,
  deleteVideo,
};