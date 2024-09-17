import { FC, memo } from 'react';

import { education, experience, certificate, SectionId, skills, skill_summary, cert_summary } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Resume}>
      <div className="relative">
        <div className="absolute top-[-50px] bottom-[-50px] left-[-50px] right-[-50px] bg-neutral-900 opacity-60 blur-md gap-y-6 rounded-xl"></div>
        <div className="relative flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection defaultExpanded={false} title="Study & Certificate">
            <p style={{ paddingTop: '8px', color: 'white', whiteSpace: 'pre-line' }}>{cert_summary}</p>
            {certificate.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection defaultExpanded={true} title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection defaultExpanded={false} title="Skills">
            <p style={{ paddingTop: '8px', color: 'white', whiteSpace: 'pre-line' }}>{skill_summary}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
