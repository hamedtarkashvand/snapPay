import type { FC } from 'react';
import { ContactInterface } from '../../services/contacts/types';
import ListItem from './ListItem';
import Alert from '../Alert';

interface ListProps {
    contacts:ContactInterface[] | undefined
}

const List: FC<ListProps> = ({
    contacts
}) => {
    if(!contacts?.length){
        return (
            <Alert badgeText='NotFound' contentTest='Sorry, no items were found'/>
        )
    }
        return (
            <div id="listParent" className="overflow-y-auto">
            <ul>
              {contacts?.map((contact) => (
                 <ListItem key={contact.id} {...contact}  />
              ))}
            </ul>
          </div>
        );
}
export default List;