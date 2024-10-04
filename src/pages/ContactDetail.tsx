import { useEffect } from "react";
import { useContactDetailQuery } from "../services/contacts/apiContacts";
import { Link, useNavigate, useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import { addRecentSearch } from "../store/sliceRecentContact";
import { useDispatch } from "react-redux";

const ContactDetail = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!id) navigate(-1);

  const { data, isLoading } = useContactDetailQuery({id});

  useEffect(() => {
    if (data) {
      dispatch(addRecentSearch(data));
    }
  }, [id, data, dispatch]);

  if (!data) {
    return <Alert badgeText="NotFound" label="" />;
  }

  const {
    address,
    avatar,
    company,
    createdAt,
    first_name,
    last_name,
    phone,
    email,
    note,
  } = data;

  return (
    <div className="flex flex-col justify-between h-full">
      {isLoading && <Loading />}
      {!data ? (
        <Alert badgeText="NotFound" label="Not Found Detail" />
      ) : (
        <>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
            <div className="flex items-center p-4">
              <Avatar firstName={first_name} src={avatar} />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {first_name} {last_name}
                </h2>
                <p className="text-gray-600">{company}</p>
                <p className="text-gray-500">{address}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-900">
                <strong>Email:</strong> {email}
              </p>
              <p className="text-gray-900">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="text-gray-900">
                <strong>Note:</strong> {note}
              </p>
              <p className="text-gray-500 text-sm">
                Created: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex text-center -mr-3 -ml-3 -mb-3 px-4 rounded-md py-3 text-sm font-medium text-white bg-blue-700"
          >
            Back to Search Page
          </Link>
        </>
      )}
    </div>
  );
};
export default ContactDetail;
