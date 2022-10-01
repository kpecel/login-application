export const createUserStore = () => {
  return {
    data: { firstName: "", lastname: "", role: "" },
    updateUserDetails(details) {
      this.data.firstName = details.firstName;
      this.data.lastName = details.lastName;
      this.data.role = details.role;
    },
  };
};
