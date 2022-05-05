describe("Enviroment", () => {
  it("should test environment", () => {
    console.log(
      "process.env.DOTENV_CONFIG_PATH",
      process.env.DOTENV_CONFIG_PATH
    );

    expect(process.env.DOTENV_CONFIG_PATH).toBe("./config/.env.test");
  });
});
