import database from "infra/database.js"

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const versionPg = parseFloat(process.env.POSTGRES_VERSION);
  response.status(200).json({
    update_at: updateAt,
    version_pg: versionPg,
  })
}

export default status;