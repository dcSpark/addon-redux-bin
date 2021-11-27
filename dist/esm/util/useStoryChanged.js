import { useRef } from 'react';
import { useStorybookApi } from '@storybook/api';

var s = function s(_s) {
  return _s === undefined ? '' : _s;
};

var useStoryChanged = function useStoryChanged() {
  var api = useStorybookApi();
  var storyId = s(api.getUrlState().storyId);
  var storyIdRef = useRef('');
  var storyChanged = storyId !== '' && storyIdRef.current !== storyId;
  storyIdRef.current = storyId;
  return storyChanged;
};

export default useStoryChanged;