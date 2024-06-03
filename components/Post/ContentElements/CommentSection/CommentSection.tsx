import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CommentObject } from "../../../../@types/common/PostContent";
import s from "./CommentSection.module.scss";
import { Button } from "../../../UI/Button/Button";
import { UISvgSelector } from "../../../UI/UISvgSelector";
import { useUser } from "../../../../context/user/UserContext";
import classNames from "classnames";
import Avatar from "../../../Profile/Avatar/Avatar";
import usePostFunctions from "../../../../hooks/api/usePostFunctions";
import { getUserById } from "../../../../api/user";
import { User } from "../../../../@types/entities/User";
import { useOutsideCheck } from "../../../../hooks/useOutsideClick";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import { deleteComment } from "../../../../api/publications";
import useUserByID from "../../../../hooks/api/useUserByID";

type Props = {
  open: boolean;
  comments: CommentObject[];
  postId: string;
};

const CommentComponent = ({
  id,
  userId,
  content,
  setIsEditing,
}: CommentObject & {
  setIsEditing: Dispatch<
    SetStateAction<{ id: string; content: string } | null>
  >;
}) => {
  const { user } = useUser();

  const isAuthor = user?.userID === userId;
  const handleOpenMenu = () => {};

  const author = useUserByID(userId);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideCheck(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleEditComment = () => setIsEditing({ id, content });
  const handleDeleteComment = () => deleteComment(id);

  const dropdownItems = [
    {
      name: "Edit",
      func: handleEditComment,
      icon: <UISvgSelector id="edit" />,
    },
    {
      name: "Delete",
      func: handleDeleteComment,
      icon: <UISvgSelector id="remove" />,
    },
  ];

  // console.log("author", author);

  if (!author) return null;

  return (
    <div className={s.item}>
      <Avatar src={author?.avatar} />
      <div className={s.item_content}>
        <h6>
          {author?.firstName} {author?.lastName}
        </h6>
        <p>{content}</p>
      </div>
      {isAuthor && (
        <>
          <span ref={dropdownRef}>
            <Button
              type="small"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <UISvgSelector id="expand" />
            </Button>
          </span>
          <Dropdown
            dropdownRef={dropdownRef}
            onOpen={(b: boolean) => setIsDropdownOpen(b)}
            open={isDropdownOpen}
            items={dropdownItems}
            className={s.dropdown}
          />
        </>
      )}
    </div>
  );
};

export default function CommentSection({ postId, open, comments }: Props) {
  const { user } = useUser();
  const { handleCommentPost } = usePostFunctions();
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState<{
    id: string;
    content: string;
  } | null>(null);

  //TODO:move the object creation to a function, only pass the content and the id
  const comment = useMemo(() => {
    return {
      id: "",
      postId: postId || "",
      userId: user?.userID,
      content: value,
      liked: [],
      responses: {
        userId: "",
        content: "",
        liked: "",
      },
    };
  }, [value, user?.userID, postId]);

  const handleSend = () => {
    if (!isEditing) {
      handleCommentPost(comment);
    } else {
    }
  };

  return (
    <div className={classNames(s.container, { [s.open]: open })}>
      {comments.map((c) => {
        return (
          <CommentComponent {...c} key={c.id} setIsEditing={setIsEditing} />
        );
      })}
      <div className={s.input_container}>
        {isEditing && (
          <span className={s.label}>
            <p>Editing</p>
            <Button type="small" onClick={() => setIsEditing(null)}>
              <UISvgSelector id="close" />
            </Button>
          </span>
        )}
        <div className={s.input}>
          <Avatar />
          <textarea
            name="comment"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Leave a comment"
            defaultValue={isEditing?.content || undefined}
          />
          <Button type="small" onClick={handleSend}>
            <UISvgSelector id="send" />
          </Button>
        </div>
      </div>
    </div>
  );
}
