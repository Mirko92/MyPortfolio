'use client';

import { MpSection } from "@/components/MpSection";
import { MpSkill } from "@/components/MpSkill";
import { useIsVisible } from "@/utils/useIsVisibile";

const MP_SKILLS = [
  { name: "CSS",        value: 90 , img: "/icons/css_icon.svg"        },
  { name: "HTML",       value: 90 , img: "/icons/html_icon.svg"       },
  { name: "TypeScript", value: 95 , img: "/icons/typescript_icon.svg" },
  { name: "Javascript", value: 85 , img: "/icons/javascript_icon.svg" },
  { name: "Angular",    value: 85 , img: "/icons/angular_icon.svg"    },
  { name: "React",      value: 80 , img: "/icons/react_icon.svg"      },
  { name: "PowerShell", value: 75 , img: "/icons/powershell_icon.svg" },
  { name: "Vue",        value: 75 , img: "/icons/vue_icon.svg"        },
  { name: "C#",         value: 70 , img: "/icons/c_sharp_icon.svg"    },
  { name: "Git",        value: 70 , img: "/icons/git_icon.svg"        },
  { name: "Java",       value: 55 , img: "/icons/java_icon.svg"      },
  { name: "DB",         value: 55 , img: "/icons/sql_icon.svg"      },
];

export function MySkills() {

  useIsVisible("main .animate-on-view", (item) => {
    if (item.isIntersecting) {
      item.target.classList.remove("animate-on-view");
    } else {
      item.target.classList.add("animate-on-view");
    }
  });

  return (
    <MpSection
      noBackGround
      id="skills"
      title="My Skills"
    >
      <ul className="grid grid-cols-3 gap-3 max-w-xl m-auto animate-on-view">
        {
          MP_SKILLS.map( (s, i) => {
            return <li key={`${i}_${s.name}`}>
              <MpSkill 
                value={s.value} 
                name={s.name} 
                imageUrl={s.img}
              />
            </li>
          })
        }
      </ul>
    </MpSection>
  )
}