import Comment from "./Comment";
import { IoIosSend } from "react-icons/io";

export interface CommentProps {
  id: number;
  comment: string;
  answer: string;
}

const comments: CommentProps[] = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Quis praesent mauris neque quis. Dictum aliquam id ut ut. Duis adipiscing maecenas blandit suspendisse mi aenean massa sit. Nisi mattis purus sit at ultrices id faucibus pellentesque in.",
    answer: "",
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur. Quis praesent mauris neque quis. Dictum aliquam id ut ut. Duis adipiscing maecenas blandit suspendisse mi aenean massa sit. Nisi mattis purus sit at ultrices id faucibus pellentesque in.Lorem ipsum dolor sit amet consectetur. Quis praesent mauris neque quis. Dictum aliquam id ut ???",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Quis praesent mauris neque quis. Lorem ipsum dolor sit amet consectetur. Quis praesent mauris neque quis.!!!!!!!!!!",
  },
];

export default function CommentsRoute() {
  return (
    <section className="bg-white rounded sm:pt-[60px] pt-5 sm:pb-[112px] pb-10">
      <ul className="sm:max-w-[840px] sm:mx-auto flex flex-col gap-10 px-4">
        <li>
          <h2 className="sm:hidden text-[28px] font-semibold leading-[34px]">
            Izohlar
          </h2>
        </li>
        {comments.map((comment: CommentProps) => (
          <Comment key={comment.id} data={comment} />
        ))}
        <li>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              aria-label="comment input"
              placeholder="Izohingizni yozing"
              className="w-full bg-[rgba(44,48,51,0.1)] rounded-full border border-[rgb(44,48,51)] py-[12px] px-6 placeholder:opacity-50"
            />
            <button className="p-4 bg-[rgba(44,48,51,0.1)] hover:bg-[rgba(44,48,51,0.4)] transition-colors rounded-full border border-[rgb(44,48,51)]">
              <IoIosSend />
            </button>
          </form>
        </li>
      </ul>
    </section>
  );
}
