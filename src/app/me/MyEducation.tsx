import { MpEducation } from "@/components/MpEducation";
import { MpGradientText } from "@/components/MpGradientText";
import { MpSection } from "@/components/MpSection";

const MY_EDUCATION_ACHIEVEMENTS = [
  { name: "Microsoft AZ-900",                             
    title:<>Microsoft Certified: <MpGradientText>Azure Fundamentals</MpGradientText> </>, 
    dateString: "April, 2023",  
  },
  { name: "Microsoft MS-600",                             
    title:<>Microsoft Certified: <MpGradientText>Teams Application Developer Associate</MpGradientText> </>, 
    dateString: "March, 2023",  
  },
  { name: "Flutter & Dart",                               
    title:<>Udemy: <MpGradientText>Flutter & Dart</MpGradientText></>, 
    dateString: "February, 2019",  
  },
  { name: "Java - O.C.P.",                                
    title:<>Scuola Vega (MI): <MpGradientText>Java - O.C.P.</MpGradientText> </>, 
    dateString: "May, 2015",  
  },
  { name: "Java - O.C.A.",                                
    title:<>Scuola Vega (MI): <MpGradientText>Java - O.C.A.</MpGradientText> </>,
    dateString: "January, 2015",  
  },
  { name: "Expert in Electronics and Telecommunications", 
    title:<>ITIS (PG): <MpGradientText>Expert in Electronics and Telecommunications</MpGradientText> </>,
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
                  className="h-full snap-center flex flex-col flex-no-wrap justify-center" >
                <MpEducation {...x} />
              </li>
            )
          )
        }
      </ul>
    </div>

    
  </MpSection>;
}