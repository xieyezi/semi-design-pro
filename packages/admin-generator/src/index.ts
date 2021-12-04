import { GeneratorContext, GeneratorCore } from '@modern-js/codesmith';
import { AppAPI } from '@modern-js/codesmith-api-app';

const handleTemplateFile = async (
  context: GeneratorContext,
  appApi: AppAPI,
) => {
  await appApi.forgeTemplate('templates/**/*');
};

export default async (context: GeneratorContext, generator: GeneratorCore) => {
  const appApi = new AppAPI(context, generator);

  if (!(await appApi.checkEnvironment())) {
    process.exit(1);
  }

  generator.logger.debug(`start run @semi-design-pro/admin-generator`);
  generator.logger.debug(`context=${JSON.stringify(context)}`);
  generator.logger.debug(`context.data=${JSON.stringify(context.data)}`);

  await handleTemplateFile(context, appApi);

  if (context.handleForged) {
    await context.handleForged(
      'admin-generator',
      context,
      context.config.hasPlugin,
    );
  }

  generator.logger.debug(`forge @semi-design-pro/admin-generator succeed `);
};