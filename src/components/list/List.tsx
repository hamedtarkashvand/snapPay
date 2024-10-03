import { CSSProperties, useCallback, type FC } from "react";
import { ContactInterface } from "../../services/contacts/types";
import ListItem from "./ListItem";
import Alert from "../Alert";

//import { AutoSizer, IndexRange, List as ListVirtualizes } from "react-virtualized";
// import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";
import 'react-virtualized/styles.css';

import { FixedSizeList as ListVirtualized } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

interface ListProps {
  contacts: ContactInterface[] | undefined;
  itemsPerPage?: number;
  totalContacts?: number;
  fetchMoreContacts: (startIndex: number, stopIndex: number) => void;
}

interface RowProps {
  index: number;
  data: ContactInterface[];
  style: CSSProperties;
}

const List: FC<ListProps> = ({
  contacts,
  fetchMoreContacts,
  itemsPerPage,
  totalContacts,
}) => {

 


  if (!contacts?.length) {
    return (
      <Alert badgeText="NotFound" contentTest="Sorry, no items were found" />
    );
  }

  const RowRenderer = ({ index, data, style }: RowProps) => {
    const item = contacts[index];
    return ( <ListItem key={index} {...item} style={{...style}}/>);
  };

  const isItemLoaded = (index: number) => index < contacts?.length;

  return (
    <div id="listParent" className="grow">
      <InfiniteLoader
        isItemLoaded={(index) => isItemLoaded(index)}
        itemCount={5}
        loadMoreItems={fetchMoreContacts}
        threshold={5}
      >
        {({ onItemsRendered, ref }) => (
          <AutoSizer>
            {({ height, width }: { height: number; width: number }) => (
              <ListVirtualized
                height={height}
                width={width}
                itemCount={contacts.length}
                itemData={contacts}
                itemSize={92}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {RowRenderer}
              </ListVirtualized>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default List;
