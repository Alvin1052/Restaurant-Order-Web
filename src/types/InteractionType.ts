export interface CommentType {
  comment: string;
  createdAt: Date;
  id: number;
  star: number;
  user: {
    id: number;
    name: string;
  };
}
