import shell from 'shelljs';
import inquirer from "inquirer";
import ora from "ora";
import { Command } from "commander";
import { existsSync } from "fs";
import { resolve } from "path";
import { Prompt, PromptType, TempateType } from "./prompt";

const PackageTemplateMap = {
  [TempateType.spa]: '@semi-design-pro/admin-generator',
};

async function create(project: string) {
  const answers = await inquirer.prompt<PromptType>(Prompt);
  const { type } = answers;
  createProject(project, type);
}

function createProject(projectName: string, type: TempateType) {
  const config = JSON.stringify({
    projectName,
  });

  const generatorShell = `npx @modern-js/codesmith-cli gen ${PackageTemplateMap[type]} --config='${config}'`;
  console.log('object :>> ', generatorShell);
  const spinner = ora().start();
  spinner.text = '正在创建项目';
  if(existsSync(resolve(process.cwd(), `./${projectName}`))) {
    spinner.fail('创建项目失败，存在同名目录');
    return;
  } else {
    shell.exec(`mkdir ${projectName}`);
  }
  shell.exec(`cd ${projectName} && ${generatorShell}`, { silent: true }, (code, _, err) => {
    if(code !== 0) {
      spinner.fail('创建项目失败' + err);
      shell.exec(`rm -rf ${projectName}`);
    } else {
      spinner.text = '安装依赖';
      shell.exec(`cd ${projectName} && yarn install`, { silent: true }, () => {
        spinner.succeed('项目创建成功');
      });
    }
  });

}

export default function(program: Command) {
  program
  .command('create <project>')
  .alias('c')  
    .action(create)
}