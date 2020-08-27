
export default class ApiImpl implements Api {

  constructor(url: string) {
    this.url = url;
  }

  async getUsers() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          let users: Array<User> = responseJson as Array<User>
          console.log("hello mee");
          let networkResponse = new NetworkResponse();
          console.log("Do you have anything");
          console.log("The network response: " + networkResponse.data);
          networkResponse.data = users;
          console.log("The network response: " + networkResponse.data);
          return networkResponse;
      })
      .catch((error) => {

      });
  }

}
