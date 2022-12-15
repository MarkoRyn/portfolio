import Cv from '../Models/CvModels'
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from '../ApiCalls/apiRequests'

export default class CvServices {
  // ********** Post request **********
  // post request
  async postCv(data) {
    return await postRequest('/cvs', data)
  }

  // get request
  async getCv() {
    const req = await getRequest('/cvs')
    const res = req.data
    return res.map((data) => new Cv(data))
  }

  // put request
  async putCV(id, data) {
    return await putRequest('/cvs/' + id, data)
  }

  // delete request
  //   async deleteCv(id) {
  //     return await deleteRequest('/cvs/' + id)
  //   }

  async postExperience(id, data) {
    return await postRequest('/cvs/' + id + '/experience', data)
  }
  async deleteExperience(id, data) {
    return await postRequest('/cvs/' + id + '/experience/delete', data)
  }

  // put request
  async putExperience(id, data) {
    return await putRequest('/cvs/' + id + '/experience', data)
  }
}
