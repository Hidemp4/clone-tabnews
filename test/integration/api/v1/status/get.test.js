test("GET to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status/");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdatedAt);

  // RETORNA A VERSAO DO POSTGRES
  expect(responseBody.version_pg).toBeDefined()
  const parsedVersion = parseFloat(responseBody.version_pg)
  expect(responseBody.version_pg).toEqual(parsedVersion)
});