const main = async () => {
    console.log('it Runs')
}

main()
  .then(() => process.exit(1))
  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });
