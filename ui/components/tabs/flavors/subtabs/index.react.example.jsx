/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import _ from 'lodash';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Subtab = props =>
  <li id={props.id} className={className('slds-tabs--default__item slds-grid slds-grid--vertical-align-center', props.hasFocus ? 'slds-has-focus' : null, props.active ? 'slds-active' : null, props.className)}>
    <a href="javascript:void(0);" className="slds-tabs--default__link slds-p-horizontal--xx-small" role="tab" title={ props.title || 'Subtab Name'}  aria-selected={ props.active ? 'true' : 'false' } tabIndex={ props.active ? '0' : '-1' }>
      { props.itemUnsaved ? <abbr className="slds-indicator--unsaved" title="Tab Not Saved">*</abbr> : null }
      <div className="slds-icon_container" title={ _.startCase(props.symbol) || 'Case' }>
        <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol={ props.symbol || 'case' } />
        <span className="slds-assistive-text">{ _.startCase(props.symbol) || 'Case' }</span>
      </div>
      <span className={className('slds-truncate', props.pinned ? 'slds-assistive-text' : null)} title={ props.title || 'Subtab Name'}>{ props.title || 'Subtab Name'}</span>
    </a>
    { props.menuIcon ?
        <div className={className('slds-dropdown-trigger slds-dropdown-trigger--click slds-p-left--none slds-p-right--none', props.actionOverflow == 'true' ? 'slds-is-open' : null)}>
          <ButtonIcon
            className="slds-button--icon-container slds-button--icon-x-small"
            tabIndex={ props.active ? '0' : '-1' }
            symbol="chevrondown"
            aria-haspopup="true"
            assistiveText={ 'Actions for ' + props.title }
          />
        </div>
      : null }
    <div className={className('slds-col--bump-left slds-p-left--none slds-p-right--none', props.pinned ? 'slds-assistive-text' : null)}>
      <ButtonIcon
        className="slds-button--icon-container slds-button--icon-x-small"
        tabIndex={ props.active ? '0' : '-1' }
        symbol="close"
        assistiveText={ 'Close ' + props.title }
      />
    </div>
  </li>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab active />
          <Subtab />
        </ul>
      </div>
  },
  {
    id: 'subtabs-has-focus',
    label: 'Tab - Focus',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab id="subtab-01" active hasFocus />
          <Subtab />
        </ul>
      </div>,
    script: `
      document.getElementById('subtab-01').focus()
    `
  },
  {
    id: 'subtabs-unsaved',
    label: 'Unsaved Tab',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab active itemUnsaved />
          <Subtab />
        </ul>
      </div>
  },
  {
    id: 'subtabs-borders',
    label: 'With Borders',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab active className="slds-border--right slds-border--left" />
          <Subtab className="slds-border--right" />
        </ul>
      </div>
  },
  {
    id: 'subtabs-menu',
    label: 'Tab - Action Overflow',
    element:
      <div className="slds-tabs--default">
        <ul className="slds-tabs--default__nav" role="tablist">
          <Subtab active menuIcon />
          <Subtab menuIcon />
        </ul>
      </div>
  }
];

