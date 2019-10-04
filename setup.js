const fs = require('fs')
const path = require('path')

const projectPath = path.join(__dirname, '..', '..')
const PACKAGE_JSON_PATH = path.join(projectPath, 'package.json')

const templateFilesToDelete = ['setup.js']

const deleteFile = filePath => {
  if (!fs.existsSync(filePath)) {
    return
  }

  fs.unlinkSync(filePath)
}

const deleteTemplateFile = fileName =>
  deleteFile(path.join(__dirname, fileName))

updatePackageJSON()
templateFilesToDelete.forEach(deleteTemplateFile)

function updatePackageJSON() {
  let packageContent = '{}'

  if (fs.existsSync(PACKAGE_JSON_PATH)) {
    packageContent = fs.readFileSync(PACKAGE_JSON_PATH, 'utf8')
  }

  let data = JSON.parse(packageContent)

  data.scripts = { ...data.scripts, generator: 'plop', g: 'plop' }

  data = { ...data, devDependencies: { ...data.devDependencies } }

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(data, null, 2))
}
