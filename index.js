module.exports = () => {
  const name = "@kawarimidoll/my-playground";
  return {
    name,
    say(){
      console.log(name + " is here!");
    }
  };
};
