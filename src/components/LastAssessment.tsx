import rightIcon from '../assets/icons/sr-chevron-circle-right.png';

interface LastAssessmentProps {
  onClick: () => void;
  cognitiveStatus: string,
  applicableMeasures: string,
}

export const LastAssessment: React.FC<LastAssessmentProps> = ({
  onClick,
  cognitiveStatus,
  applicableMeasures,
}) => {
  return (
    <div
      className="w-full max-w-[660px] p-[12px] gap-[28px] rounded-xl shadow-[0px_21px_18.8px_-19px_rgba(0,0,0,0.15)] flex justify-between items-center mb-[12px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-1 w-[80%] flex gap-1 items-center p-[8px_12px] gap-[8px] rounded-[30px] bg-[#E7974D1F] text-orange-600">
        <p className="font-extrabold text-xs sm:text-sm md:text-base lg:text-lg">
          {cognitiveStatus}
        </p>
        <span className="w-[5px] h-[5px] bg-orange-600 rounded-full inline-block" />
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {applicableMeasures}
        </p>
      </div>

      <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
        <img src={rightIcon} className="text-white"></img>
      </div>
    </div>
  );
};
