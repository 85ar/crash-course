interface ErrorMessageProps {
  error: string;
}
const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className="text-center text-red-500">{error}</p>;
};

export default ErrorMessage;
