import { CSSProperties, useCallback, type FC } from "react";
import { ContactInterface } from "../../services/contacts/types";
import ListItem from "./ListItem";
import Alert from "../Alert";

import {
  AutoSizer,
  IndexRange,
  List as ListVirtualizedTow,
} from "react-virtualized";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";

interface ListProps {
  contacts: ContactInterface[] | undefined;
  itemsPerPage?: number;
  totalContacts: number;
  fetchMoreContacts: (
    params:IndexRange
  ) =>  Promise<any> ;
}

interface RowRenderProps {
  index: number;
  key: string;
  style: CSSProperties;
}

const ListVirtualized: FC<ListProps> = ({
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

  const RowRenderer = ({
    index,
    key,
    style,
  }: RowRenderProps) => {
    const item = contacts[index];
    return <ListItem key={key} {...item} style={{ ...style }} />;
  };

  const isItemLoaded = (index: number) =>  index < contacts.length;
    
  
  return (
    <div id="listParent" className="grow">
      <InfiniteLoader
        isRowLoaded={({ index }) => {   
          return isItemLoaded(index)
        }}
        rowCount={totalContacts}
        loadMoreRows={fetchMoreContacts}
        threshold={5}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <ListVirtualizedTow
                height={height}
                width={width}
                rowCount={contacts.length}              
                rowHeight={92}
                rowRenderer={RowRenderer}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
              >
                {RowRenderer}
              </ListVirtualizedTow>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default ListVirtualized;
