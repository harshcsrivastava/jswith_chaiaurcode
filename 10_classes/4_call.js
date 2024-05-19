function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(this, username)//call nhi hua yaha, kah skte ki vo bana execute hua lekin value hawa me rhi
    // therefor .call(reference hold kara ke rkhna) use kiya
    
    SetUsername.call(this, username)
    //call hamara currrent executiion context kisi aur fn ko pass kr    deta hai and ye example

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);