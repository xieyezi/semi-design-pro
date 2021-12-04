export const enum TempateType {
  spa = 'spa'
}

export interface PromptType {
  type: TempateType;
}

export const Prompt = [
  {
    type: 'list',
    name: 'type',
    message: '请选择项目类型',
    choices: [
      { name: '中后台SPA项目', value: TempateType.spa },
    ]
  }
];