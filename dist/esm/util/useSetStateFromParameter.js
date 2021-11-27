import { useRef, useEffect } from 'react';
import { stringify } from '../util/jsonHelper';
import { EVENTS, PARAM_REDUX_MERGE_STATE } from '../constants';
import { useChannel, useParameter } from '@storybook/api';
import useStoryChanged from '../util/useStoryChanged';

var useSetStateFromParameter = function useSetStateFromParameter() {
  var emit = useChannel({});
  var mergeStateRef = useRef('');
  var mergeState = useParameter(PARAM_REDUX_MERGE_STATE, '');
  var storyChanged = useStoryChanged();
  useEffect(function () {
    var mergeStateChanged = mergeState !== mergeStateRef.current;
    mergeStateRef.current = mergeState;

    if (mergeState !== '' && (storyChanged || mergeStateChanged)) {
      emit(EVENTS.MERGE_STATE, stringify(mergeState));
    }
  }, [mergeState, storyChanged]);
};

export default useSetStateFromParameter;