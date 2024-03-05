import { IComment } from '@models/comment';

export default function CommentCard({
  comment: { email, body },
}: {
  comment: IComment;
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{email}</div>
        {body}
      </div>
    </div>
  );
}
