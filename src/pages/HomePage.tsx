import { useMockData } from '../hooks/useMockData';
import avatarUrl from "../assets/profile.jpg"
import seeMoreIcon from "../assets/icons/arrow-right.png";
import { IData } from "../assets/mockData";
import { Profile } from "../components/Profile";
import { LastAssessment } from "../components/LastAssessment";
import { Button } from "../components/PrimaryButton";
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useMockData();
  const lastThreeItems = data ? data.slice(-3) : [];

  const name = "Dr. Johnson"; // User's name

  const handleAssessmentCreation = () => {
    navigate('../assessment-create');
  }

  if (isLoading) return <Loader title="Loading your data"/>; // Loading state
  if (error) return <div>Error loading data: {error.message}</div>; // Error state

  return (
    <div className="flex flex-col justify-between h-full">
      <Profile name={name} avatarUrl={avatarUrl} />
      <div className="flex flex-col md:flex-row md:gap-[100px] justify-between items-between md:items-center mb-[15px] h-[70%]">
        <div className="md:flex-1">
          <div className="flex justify-between items-center mb-[12px]">
            <p className="text-lg lg:text-xl font-bold text-[#1A1C1E]">
              Recent assessments
            </p>
            <p className="flex items-center gap-[12px] font-bold text-xs md:text-sm lg:text-base text-[#6C7278] text-[#6C7278]">
              See more
              <img src={seeMoreIcon} alt="right arrow" />
            </p>
          </div>
          <ul>
            {lastThreeItems?.map((item: IData) => (
              <li key={item.id}>
                <LastAssessment
                  cognitiveStatus={item.cognitiveStatus}
                  applicableMeasures={item.applicableMeasures}
                  onClick={() => { }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-1">
          <Button disabled={false} onClick={handleAssessmentCreation} className="bg-[#1A1C1E] text-white font-bold text-lg md:min-w-60">
            + New Assessment
          </Button>
        </div>
      </div>
    </div>

  )
}