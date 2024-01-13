import { MpSection } from "@/components/MpSection";
import { MpSkill } from "@/components/MpSkill";

const MP_SKILLS = [
  { name: "Javascript", value: 80 , img: "/icons/javascript_icon.svg" },
  { name: "TypeScript", value: 99 , img: "/icons/typescript_icon.svg" },
  { name: "HTML",       value: 80 , img: "/icons/html_icon.svg" },
  { name: "CSS",        value: 90 , img: "/icons/css_icon.svg" },
  { name: "C#",         value: 70 , img: "/icons/c_sharp_icon.svg" },
  { name: "PowerShell", value: 75 , img: "/icons/powershell_icon.svg" },
  { name: "Git",        value: 70 , img: "/icons/git_icon.svg" },
  { name: "Angular",    value: 85 , img: "/icons/angular_icon.svg" },
  { name: "React",      value: 80 , img: "/icons/react_icon.svg" }
];

export function MySkills() {
  return (
    <MpSection
      noBackGround
      id="skills"
      title="My Skills"
    >
      
      <ul className="grid grid-cols-3 gap-3">
        {
          MP_SKILLS.map( (s, i) => {
            return <li key={`${i}_${s.name}`}>
              <MpSkill 
                name  = {s.name}
                value = {s.value}
                img   = {s.img}
              />
            </li>
          })
        }
      </ul>
    </MpSection>
  )
}