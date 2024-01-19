import { MpEducation } from "@/components/MpEducation";
import { MpGradientText } from "@/components/MpGradientText";
import { MpSection } from "@/components/MpSection";

const MY_EDUCATION_ACHIEVEMENTS = [
  {
    name: "Future",                             
    title:<>I am<MpGradientText>ALWAYS LEARING</MpGradientText> </>, 
    description: "Scroll to know more...",
    dateString: "Until now and beyond!",  
  },
  { name: "Microsoft AZ-900",                             
    title:<>Microsoft Certified: <MpGradientText>Azure Fundamentals</MpGradientText> </>, 
    description: "AZ900 - Foundational level knowledge of cloud services provided with Azure.",
    dateString: "April, 2023",  
  },
  { name: "Microsoft MS-600",                             
    title:<>Microsoft Certified: <MpGradientText>Teams Application Developer Associate</MpGradientText> </>, 
    description: "MS600 - Design, build, test, and maintain modern enterprise-grade applications and solutions with Microsoft Teams.",
    dateString: "March, 2023",  
  },
  { name: "Flutter & Dart",                               
    title:<>Udemy: <MpGradientText>Flutter & Dart</MpGradientText></>, 
    description: "Dart & Flutter from the ground up. Develop cross mobile applications.",
    dateString: "February, 2019",  
  },
  { name: "Java - O.C.P.",                                
    title:<>Scuola Vega (MI): <MpGradientText>Java - O.C.P.</MpGradientText> </>, 
    description: "Oracle Certifice Professional",
    dateString: "May, 2015",  
  },
  { name: "Java - O.C.A.",                                
    title:<>Scuola Vega (MI): <MpGradientText>Java - O.C.A.</MpGradientText> </>,
    description: "Oracle Certified Associate",
    dateString: "January, 2015",  
  },
  { name: "Expert in Electronics and Telecommunications", 
    title:<>ITIS (PG): <MpGradientText>Expert in Electronics and Telecommunications</MpGradientText> </>,
    description: "Statal Industrial Technical Institute A. Volta",
    dateString: "2006 - 2011",  
  },
];

export function MyEducation() {
  return <MpSection 
    id="education"
    title="Educational Journey"
  >

    <div className="flex flex-row overflow-y-auto relative snap-mandatory snap-y">
      <div className="px-4 sticky top-0">
        <div className="w-1 bg-white h-full">&nbsp;</div>
      </div>

      <ul>
        {
          MY_EDUCATION_ACHIEVEMENTS.map(
            (x, i) => (
              <li key={`education_${i}_${x.name}`} 
                  className="h-96 snap-center snap-proximity flex flex-col flex-no-wrap justify-center" >
                <MpEducation {...x} />
              </li>
            )
          )
        }
      </ul>
    </div>

    
  </MpSection>;
}