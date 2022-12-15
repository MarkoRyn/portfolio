export default class Cv {
  constructor(data) {
    this._id = data._id
    this._education = data.education
    this._experience = data.experience
    this._skill = data.skill
    this._softSkill = data.softSkill
    this._interest = data.interest
    this._language = data.language
  }
  get id() {
    return this._id
  }
  get education() {
    return this._education
  }
  get experience() {
    return this._experience
  }
  get skill() {
    return this._skill
  }
  get softSkill() {
    return this._softSkill
  }
  get interest() {
    return this._interest
  }
  get language() {
    return this._language
  }
}
