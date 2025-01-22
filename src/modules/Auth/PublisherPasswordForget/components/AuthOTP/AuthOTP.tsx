import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../../Components/Ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export default function OTP({
  otp,
  setOtp,
}: {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={otp}
        onChange={setOtp}
        required
        className="w-full flex items-center justify-center"
      >
        <InputOTPGroup className="flex space-x-4">
          <InputOTPSlot
            index={0}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
          <InputOTPSlot
            index={1}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
          <InputOTPSlot
            index={2}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
          <InputOTPSlot
            index={3}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
          <InputOTPSlot
            index={4}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
          <InputOTPSlot
            index={5}
            className="bg-[#EAEAEB] rounded border-none sm:h-16 sm:w-16"
          />
        </InputOTPGroup>
      </InputOTP>
    </>
  );
}
