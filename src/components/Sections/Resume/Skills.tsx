import { FC, memo, PropsWithChildren, useMemo } from "react";
import { Skill as SkillType, SkillGroup as SkillGroupType } from "../../../data/dataDef";

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;

  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold text-neutral-300">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = "SkillGroup";

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [
    level,
    max,
  ]);

  const expert_lv = (percentage >= 75) ? "Proficient" : (percentage >= 50) ? "Experienced" : "Familiar";

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium text-neutral-300">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-gray-800">
        <div className="h-full rounded-full bg-cyan-600" style={{ width: `${percentage}%` }}>
          <span className="font-bold text-sm ml-2">{expert_lv}</span>
        </div>
      </div>
    </div>
  );
});

Skill.displayName = "Skill";