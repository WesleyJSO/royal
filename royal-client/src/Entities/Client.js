export class Client {
  constructor({ 
    id = ``,
    name = ``,
    cgccpf = ``,
    phonenumber = ``,
    birthdate = ``,
    expiredate = ``,
    status = ``,
  } = {}) {
    this.id = id
    this.name = name
    this.cgccpf = cgccpf
    this.phonenumber = phonenumber
    this.birthdate = birthdate
    this.expiredate = expiredate
    this.status = status
  }
}