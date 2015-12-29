import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import sinon from 'sinon';
import { expect } from 'chai';
import { Userbar } from '../../../../app/scripts/react/components/Userbar';

describe('[Component] Userbar', function() {
  describe('with isDesignOpen = true', function() {
    before('render and locate element', function() {
      this.openDesignSettingsPopup = sinon.spy();
      this.renderedComponent = renderIntoDocument(
        <Userbar
          operatorUrl="http://google.ru/"
          designMode="open"
          designParamName="open_design"
          openDesignSettingsPopup={this.openDesignSettingsPopup}
        />
      );
    });

    it('renders without errors', function() {
      expect(this.renderedComponent).to.be.an('object');
    });

    it('triggers openDesignSettingsPopup callback', function() {
      sinon.assert.calledOnce(this.openDesignSettingsPopup);
    });
  });

  describe('with isDesignOpen = false', function() {
    before('render and locate element', function() {
      this.openDesignSettingsPopup = sinon.spy();
      this.renderedComponent = renderIntoDocument(
        <Userbar
          operatorUrl="http://google.ru/"
          designMode="close"
          designParamName="open_design"
          openDesignSettingsPopup={this.openDesignSettingsPopup}
        />
      );
    });

    it('renders without errors', function() {
      expect(this.renderedComponent).to.be.an('object');
    });

    it('doesn\'t triggers openDesignSettingsPopup callback', function() {
      sinon.assert.notCalled(this.openDesignSettingsPopup);
    });
  })
});